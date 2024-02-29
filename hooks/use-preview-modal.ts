import { Product } from "@/types";

import { create } from "zustand";

interface previewModalStore {
  open: boolean;
  data?: Product;
  onOpen: (data: Product) => void;
  onClose: () => void;
}

const usePreviewModal = create<previewModalStore>((set) => ({
  open: false,
  data: undefined,
  onOpen: (data: Product) => set({ data: data, open: true }),
  onClose: () => set({ open: false }),
}));

export default usePreviewModal;
