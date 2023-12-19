import { modals } from "@mantine/modals";

export const openModalCustom = ({
  title,
  children,
  confirmText,
  cancelText,
  onCancel,
  onConfirm,
}) =>
  modals.openConfirmModal({
    title: title,
    centered: true,
    children: children,
    labels: { confirm: confirmText, cancel: cancelText },
    confirmProps: { bg: "#FF90BC" },
    cancelProps: { bg: "#FFFFFF" },
    onCancel: onCancel,
    onConfirm: onConfirm,
  });
