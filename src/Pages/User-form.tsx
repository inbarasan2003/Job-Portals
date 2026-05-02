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
    <div className="bg-white/90 backdrop-blur-xl shadow-2xl rounded-3xl p-6 sm:p-10 max-h-[85vh] overflow-y-auto border border-white/50 relative">
      <div className="w-full max-w-3xl mx-auto">
        <div className="mb-8 text-center sm:text-left relative border-b border-gray-100 pb-6">
          <button
            type="button"
            className="absolute -top-2 -right-2 bg-gray-100 hover:bg-red-100 text-gray-500 hover:text-red-500 transition-colors rounded-full p-2"
            onClick={onClose}
          >
            ✕
          </button>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-500">
            Apply for this Job
          </h1>
          <p className="text-gray-500 mt-2 font-medium">
            Take the next step in your career. Fill in your details carefully.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <FieldSet>
            <FieldGroup className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Field className="flex flex-col gap-2">
                <FieldLabel className="font-bold text-gray-700">Full Name</FieldLabel>
                <Input
                  type="text"
                  placeholder="Enter your name"
                  className="rounded-xl border-gray-200 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
                  {...register("name")}
                />
                <FieldError errors={getError(errors.name)} className="text-red-500 text-sm font-medium" />
              </Field>

              <Field className="flex flex-col gap-2">
                <FieldLabel className="font-bold text-gray-700">Email Address</FieldLabel>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="rounded-xl border-gray-200 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
                  {...register("email")}
                />
                <FieldError errors={getError(errors.email)} className="text-red-500 text-sm font-medium" />
              </Field>

              <Field className="flex flex-col gap-2">
                <FieldLabel className="font-bold text-gray-700">Phone Number</FieldLabel>
                <Input
                  type="text"
                  placeholder="Enter 10 digit phone"
                  className="rounded-xl border-gray-200 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
                  maxLength={10}
                  {...register("phone", {
                    onChange: (e) => {
                      e.target.value = e.target.value.replace(/\D/g, "");
                    }
                  })}
                />
                <FieldError errors={getError(errors.phone)} className="text-red-500 text-sm font-medium" />
              </Field>

              <Field className="flex flex-col gap-2">
                <FieldLabel className="font-bold text-gray-700">Experience (Years)</FieldLabel>
                <Input
                  type="text"
                  placeholder="Eg: 2"
                  className="rounded-xl border-gray-200 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
                  maxLength={2}
                  {...register("experience", {
                    onChange: (e) => {
                      e.target.value = e.target.value.replace(/\D/g, "");
                    }
                  })}
                />
                <FieldError errors={getError(errors.experience)} className="text-red-500 text-sm font-medium" />
              </Field>

              <Field className="col-span-1 sm:col-span-2 flex flex-col gap-4 mt-2">
                <FieldTitle className="font-bold text-gray-700">Expected Salary Range (₹ Per Year)</FieldTitle>
                <FieldDescription className="text-indigo-600 bg-indigo-50 inline-block px-4 py-2 rounded-lg font-medium self-start shadow-sm">
                  ₹{" "}
                  <span className="font-bold tabular-nums">
                    {value[0].toLocaleString()}
                  </span>{" "}
                  - ₹{" "}
                  <span className="font-bold tabular-nums">
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

              <Field className="col-span-1 sm:col-span-2 flex flex-col gap-2 mt-2">
                <FieldLabel className="font-bold text-gray-700">Cover Letter</FieldLabel>
                <textarea
                  className="w-full border border-gray-200 rounded-xl p-4 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 resize-none shadow-sm"
                  rows={5}
                  placeholder="Tell us why you are a great fit... (Minimum 30 characters)"
                  {...register("textarea")}
                />
                <FieldError errors={getError(errors.textarea)} className="text-red-500 text-sm font-medium" />
              </Field>
            </FieldGroup>
          </FieldSet>

          <Empty className="border-2 border-dashed border-indigo-200 rounded-2xl p-8 max-w-md mx-auto bg-gradient-to-b from-indigo-50/50 to-white hover:bg-indigo-50 transition-colors duration-300">
            <EmptyContent>
              <div className="flex flex-col items-center justify-center gap-4 text-center">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-500 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                  </svg>
                </div>
                <p className="text-sm text-gray-700 font-bold">
                  Upload Your Resume (PDF Only)
                </p>

                <label className="cursor-pointer bg-white border border-gray-200 hover:border-indigo-500 hover:text-indigo-600 transition-all px-6 py-2.5 rounded-full text-sm font-bold shadow-sm">
                  <input type="file" accept=".pdf" required className="hidden" id="resume-upload" />
                  <span>Choose File</span>
                </label>

                <p className="text-xs text-gray-400 font-medium">Max file size: 2MB</p>
              </div>
            </EmptyContent>
          </Empty>

          <div className="pt-6 flex justify-center border-t border-gray-100">
            <button
              type="submit"
              className="w-full sm:w-auto cursor-pointer bg-gradient-to-r from-indigo-600 to-pink-600 hover:from-indigo-700 hover:to-pink-700 transition-all text-white px-10 py-4 rounded-full font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-300"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
