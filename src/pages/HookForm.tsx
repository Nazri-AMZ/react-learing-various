import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password must have at least 8 characters" }),
});

type FormFields = z.infer<typeof formSchema>;

const HookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<FormFields>({
    defaultValues: { email: "test@test.com" },
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      throw new Error("Error");
    } catch (error) {
      setError("email", {
        message: "Email is taken",
      });
    }
    console.log(data);
  };

  return (
    <div className="flex flex-col w-full h-screen items-center justify-center">
      <h1>React Hook Form</h1>
      <form
        className="flex flex-col gap-y-2 mt-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input {...register("email")} placeholder="Email" type="text" />
        {errors.email && (
          <div className="text-red-500">{errors.email.message}</div>
        )}
        <input
          {...register("password")}
          placeholder="password"
          type="password"
        />
        {errors.password && (
          <div className="text-red-500">{errors.password.message}</div>
        )}

        <button disabled={isSubmitting}>
          {isSubmitting ? "Loading...." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default HookForm;
