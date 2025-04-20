"use client";

import {propertyDataSchema} from "@/validation/propertySchema";
import {zodResolver} from "@hookform/resolvers/zod";
import React from "react";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {Button} from "./ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import {Input} from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import {Textarea} from "./ui/textarea";

type Props = {
  submitButtonLabel: React.ReactNode;
  handleSubmit: (data: z.infer<typeof propertyDataSchema>) => void;
};

export default function PropertyForm({handleSubmit, submitButtonLabel}: Props) {
  const form = useForm<z.infer<typeof propertyDataSchema>>({
    resolver: zodResolver(propertyDataSchema),
    defaultValues: {
      address1: "",
      address2: "",
      city: "",
      postcode: "",
      price: 0,
      bedrooms: 0,
      bathrooms: 0,
      description: "",
      status: "draft",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <div className="grid grid-cols-2 gap-4">
          <fieldset
            className="flex flex-col gap-2"
            disabled={form.formState.isSubmitting}
          >
            <FormField
              control={form.control}
              name="status"
              render={({field}) => (
                <FormItem className="min-w-[300px]">
                  <FormLabel>Status</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue className="w-full" />
                      </SelectTrigger>
                      <SelectContent className="min-w-[300px] w-[340px] rounded-md shadow-md">
                        <SelectItem value="draft">Draft</SelectItem>
                        <SelectItem value="for-sale">For Sale</SelectItem>
                        <SelectItem value="withdrawn">Withdrawn</SelectItem>
                        <SelectItem value="sold">Sold</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="address1"
              render={({field}) => (
                <FormItem className="min-w-[300px]">
                  <FormLabel>Address Line 1</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="address2"
              render={({field}) => (
                <FormItem className="min-w-[300px]">
                  <FormLabel>Address Line 2</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="city"
              render={({field}) => (
                <FormItem className="min-w-[300px]">
                  <FormLabel>City</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="postcode"
              render={({field}) => (
                <FormItem className="min-w-[300px]">
                  <FormLabel>Postcode</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </fieldset>
          <fieldset
            className="flex flex-col gap-2"
            disabled={form.formState.isSubmitting}
          >
            <FormField
              control={form.control}
              name="price"
              render={({field}) => (
                <FormItem className="min-w-[300px]">
                  <FormLabel>Price</FormLabel>
                  <FormControl>
                    <Input {...field} type="number" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="bedrooms"
              render={({field}) => (
                <FormItem className="min-w-[300px]">
                  <FormLabel>Bedrooms</FormLabel>
                  <FormControl>
                    <Input {...field} type="number" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="bathrooms"
              render={({field}) => (
                <FormItem className="min-w-[300px]">
                  <FormLabel>Bathrooms</FormLabel>
                  <FormControl>
                    <Input {...field} type="number" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({field}) => (
                <FormItem className="min-w-[300px]">
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea {...field} rows={5} className="resize-none" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </fieldset>
        </div>
        <Button
          type="submit"
          className="max-w-md mx-auto mt-2 w-full flex gap-2"
          disabled={form.formState.isSubmitting}
        >
          {submitButtonLabel}
        </Button>
      </form>
    </Form>
  );
}
