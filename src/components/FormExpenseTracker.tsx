import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import "./TableExenseTracker";

interface Props {
  onSubmit: (data: FormData) => void;
}

const schema = z.object({
  desc: z.string().min(3, { message: "Must be at least 3 characters" }),
  amount: z.number({ invalid_type_error: "Amount is required" }),
  category: z.enum(["Entertainment", "Utilities", "Groceries"]),
});

type FormData = z.infer<typeof schema>;

const FormExpenseTracker = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  return (
    <>
      <form
        onSubmit={handleSubmit((data) => {
          onSubmit(data);
          reset;
        })}
      >
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <input
            {...register("desc")}
            id="desc"
            className="form-control"
            type="text"
          ></input>
          {errors.desc && <p className="text-danger">{errors.desc.message}</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            {...register("amount", { valueAsNumber: true })}
            id="amount"
            className="form-control"
            type="number"
          ></input>
          {errors.amount && (
            <p className="text-danger">{errors.amount.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <select
            {...register("category")}
            id="category"
            className="form-select"
          >
            <option value="none"></option>
            <option value="Groceries">Groceries</option>
            <option value="Utilities">Utilities</option>
            <option value="Entertainment">Entertainment</option>
          </select>
          {errors.category && (
            <p className="text-danger">{errors.category.message}</p>
          )}
        </div>
        <button type="submit" className="mb-5 btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default FormExpenseTracker;
