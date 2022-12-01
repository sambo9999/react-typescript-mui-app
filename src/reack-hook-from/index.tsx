import { useForm, SubmitHandler } from "react-hook-form";
import { Button, TextField } from "@mui/material";

//TODO: https://react-hook-form.com/get-started
//hook from example

type Inputs = {
  example: string;
  exampleRequired: string;
};

export default function RegisterFrom() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  console.log(watch("example"));
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField defaultValue="test" {...register("example")} /> <br />
      <TextField {...register("exampleRequired", { required: true })} /> <br />
      {errors.exampleRequired && (
        <span style={{ color: "red" }}>This field is required</span>
      )}
      <br />
      <Button type="submit" variant="contained">
        Submit
      </Button>
    </form>
  );
}
