import { ChangeEvent } from "react";
import cn from "clsx";

type Props = {
  id: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  label: string;
  type?: string;
  className?: string;
  errors?: string;
};

export default function Input({
  id,
  onChange,
  value,
  label,
  type = "text",
  className,
  errors,
}: Props) {
  return (
    <div className="relative">
      <input
        onChange={onChange}
        value={value}
        type={type}
        id={id}
        className={cn(
          "rounded-md px-4 pt-6 pb-1 w-full text-md text-white bg-neutral-700 appearance-none focus:outline-none focus:ring-0 peer invalid:border-b-1",
          className
        )}
        placeholder=" "
      />
      <label
        htmlFor={id}
        className="absolute text-md text-zinc-400 duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
      >
        {label}
      </label>
      {errors && (
        <div className="absolute text-sm text-red-500 top-14 left-4">
          {errors}
        </div>
      )}
    </div>
  );
}
