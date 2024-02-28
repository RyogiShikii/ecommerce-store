"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Dialog } from "@headlessui/react";

import { Color, Size } from "@/types";
import Button from "@/components/ui/button";
import Filter from "./filter";

interface MobileFiltersProps {
  sizes: Size[];
  colors: Color[];
}

const MobileFilters: React.FC<MobileFiltersProps> = ({ sizes, colors }) => {
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      <Button onClick={onOpen} className="flex items-center gap-x-2 lg:hidden">
        Filters
        <Plus size={20} />
      </Button>
      <Dialog
        open={open}
        onClose={onClose}
        as="div"
        className="relative z-40 lg:hidden"
      >
        {/*Add background color and opacity */}
        <div className="fixed inset-0 bg-black bg-opacity-25" />
        {/*Dialog position */}
        <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-auto bg-white py-4 pb-6 shadow-xl">
          {/*close button */}
          <div className="flex items-center justify-end px-4">
            <Button onClick={onClose}>Close</Button>
          </div>
          <div className="p-4">
            <Filter valueKey="sizeId" name="Sizes" data={sizes} />
            <Filter valueKey="colorId" name="Colors" data={colors} />
          </div>
        </Dialog.Panel>
      </Dialog>
    </>
  );
};

export default MobileFilters;
