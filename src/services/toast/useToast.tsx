import {ToastService} from './toastTypes';
//import {useToastContext} from './useToastContext';
import {useToastServiceZustand, useToastZustand} from './useToastZustand';

export function useToast(): ToastService['toast'] {
  // TODO: implementacion con context
  // const {toast} = useToastContext();
  // return toast;

  return useToastZustand();
}

export function useToastService(): Pick<
  ToastService,
  'showToast' | 'hideToast'
> {
  // TODO: implementacion con context
  // const {showToast, hideToast} = useToastContext();
  // return {showToast, hideToast};
  return useToastServiceZustand();
}
