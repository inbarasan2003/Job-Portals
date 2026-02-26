import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSet,
  FieldError,
  FieldDescription,
  FieldTitle,
} from "@/components/ui/field";
import { Empty, EmptyContent } from "@/components/ui/empty";
import * as React from "react";
import { Slider } from "@/components/ui/slider";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import type { FieldError as ErrorType } from "react-hook-form";
import { toast } from "sonner";


type Props ={
  onClose:()=> void
}

export default function UserForm({onClose}:Props) {

  const [value, setValue] = React.useState<[number, number]>([200000, 800000]);

  const inputs = z.object({
    name: z.string().min(1, "Name is required"),

    email: z.string().email("Invalid Email address"),

    phone: z
      .string()
      .length(10, "Phone must be exactly 10 digits")
      .regex(/^\d+$/, "Only numbers allowed"),

    experience: z
      .string()
      .min(1, "Experience required")
      .max(2, "Max 2 digits only"),

    textarea: z.string().min(30, "Minimum 30 characters required"),
  });

  type DataTypes = z.infer<typeof inputs>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<DataTypes>({
    resolver: zodResolver(inputs),
  });

  const getError = (error?: ErrorType) =>
    error ? [{ message: error.message ?? "" }] : [];

  const onSubmit = (data: DataTypes) => {
    console.log({ ...data, salaryRange: value });
    reset();
    setValue([200000, 800000]);
    toast.success('Application Submitted!.')
    onClose();
  };

  return (
    <div className="bg-white shadow-2xl rounded-2xl p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-2xl p-6 sm:p-8">
        <div className="mb-6 text-center sm:text-left relative">
          <button
            type="button"
            className="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition"
            // onClick={()=>setIsOpen(false)}
            onClick={onClose}
          >
            ✕
          </button>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Apply for this Job
          </h1>
          <p className="text-gray-500 mt-1 text-sm">
            Fill in your details carefully before submitting.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <FieldSet>
            <FieldGroup className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Field className="flex flex-col gap-2">
                <FieldLabel>Name</FieldLabel>
                <Input
                  type="text"
                  placeholder="Enter your name"
                  {...register("name")}
                />
                <FieldError errors={getError(errors.name)} />
              </Field>

              <Field className="flex flex-col gap-2">
                <FieldLabel>Email</FieldLabel>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  {...register("email")}
                />
                <FieldError errors={getError(errors.email)} />
              </Field>

              <Field className="flex flex-col gap-2">
                <FieldLabel>Phone</FieldLabel>
                <Input
                  type="text"
                  placeholder="Enter 10 digit phone"
                  {...register("phone")}
                />
                <FieldError errors={getError(errors.phone)} />
              </Field>

              <Field className="flex flex-col gap-2">
                <FieldLabel>Experience (Years)</FieldLabel>
                <Input
                  type="text"
                  placeholder="Eg: 2"
                  {...register("experience")}
                />
                <FieldError errors={getError(errors.experience)} />
              </Field>

              <Field className="col-span-1 sm:col-span-2 flex flex-col gap-3">
                <FieldTitle>Expected Salary Range (₹ Per Year)</FieldTitle>
                <FieldDescription>
                  ₹{" "}
                  <span className="font-semibold tabular-nums">
                    {value[0].toLocaleString()}
                  </span>{" "}
                  - ₹{" "}
                  <span className="font-semibold tabular-nums">
                    {value[1].toLocaleString()}
                  </span>
                </FieldDescription>

                <Slider
                  value={value}
                  onValueChange={(val) => setValue(val as [number, number])}
                  max={2000000}
                  min={100000}
                  step={50000}
                  className="mt-2 w-full"
                />
              </Field>

              <Field className="col-span-1 sm:col-span-2 flex flex-col gap-2">
                <FieldLabel>Cover Letter</FieldLabel>
                <textarea
                  className="w-full border rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  rows={4}
                  placeholder="Minimum 30 characters..."
                  {...register("textarea")}
                />
                <FieldError errors={getError(errors.textarea)} />
              </Field>
            </FieldGroup>
          </FieldSet>

          <Empty className="border-2 border-dashed border-gray-300 rounded-xl p-6 sm:p-8 max-w-md mx-auto bg-gray-50">
            <EmptyContent>
              <div className="flex flex-col items-center justify-center gap-3 text-center">
                <p className="text-sm text-gray-600 font-medium">
                  Upload Your Resume (PDF Only)
                </p>

                <label className="cursor-pointer bg-white border border-gray-300 hover:border-blue-500 transition px-4 py-2 rounded-lg text-sm font-medium shadow-sm">
                  <input type="file" accept=".pdf" required />
                </label>

                <p className="text-xs text-gray-400">Max file size: 2MB</p>
              </div>
            </EmptyContent>
          </Empty>

          <div className="pt-4 flex justify-center">
            <button
              type="submit"
              className="w-full sm:w-auto cursor-pointer  bg-blue-600! hover:bg-blue-700 transition text-white px-6 py-3 rounded-xl font-medium shadow-md"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
