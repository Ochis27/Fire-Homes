"use client";
import PropertyForm from "@/components/property-form";
import {propertyDataSchema} from "@/validation/propertySchema";
import {PlusCircleIcon} from "lucide-react";
import {z} from "zod";

const handleSubmit = async (data: z.infer<typeof propertyDataSchema>) => {
  console.log(data);
};

export default function NewPropertyForm() {
  return (
    <div>
      <PropertyForm
        handleSubmit={handleSubmit}
        submitButtonLabel={
          <>
            <PlusCircleIcon />
            Create Property
          </>
        }
      />
    </div>
  );
}
