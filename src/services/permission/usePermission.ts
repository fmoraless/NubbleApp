import {useEffect, useState} from 'react';

import {permissionService} from './permissionService';
import {PermissionName, PermissionStatus} from './permissionTypes';

export function usePermission(permissionName: PermissionName) {
  const [isLoading, setIsloading] = useState(true);
  const [status, setStatus] = useState<PermissionStatus>();

  async function checkPermission() {
    // 1) check si un permiso ya fue concedido
    // 2) si no, solicitar permiso
    // 3) lidiar con el estado unavaible
    try {
      setIsloading(true);
      const initialStatus = await permissionService.check(permissionName);
      console.log('initialStatus', initialStatus);
      if (initialStatus === 'denied') {
        console.log('requesting permission', permissionName);
        const _status = await permissionService.request(permissionName);
        setStatus(_status);
      } else {
        setStatus(initialStatus);
      }
    } catch (error) {
      setStatus('unavailable');
    } finally {
      setIsloading(false);
    }
  }

  useEffect(() => {
    checkPermission();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    status,
    isLoading,
  };
}
