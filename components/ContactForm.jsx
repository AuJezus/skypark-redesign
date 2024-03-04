"use client";

import { useForm, ValidationError } from "@formspree/react";
import Button from "./Button";
import Subheading from "./Subheading";
import { BiRightArrowAlt } from "react-icons/bi";

function ContactForm() {
  const [state, handleSubmit] = useForm("xwkgbdyn");
  console.log(state.errors);

  if (state.succeeded) {
    return <p>Ačiū, mes gavome jūsų žinutę ir netrukus atsakysime ❤️</p>;
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-8">
        <div>
          <input
            type="text"
            name="name"
            className="text w-full rounded-xl bg-primary/20 px-4 py-2 transition-all placeholder:text-dark/50"
            placeholder="Vardas"
            required
          />
          <ValidationError
            className="ml-2 text-red-500"
            prefix="Name"
            field="name"
            errors={state.errors}
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            className="text w-full rounded-xl bg-primary/20 px-4 py-2 transition-all placeholder:text-dark/50"
            placeholder="El. Paštas"
            required
          />
          <ValidationError
            className="ml-2 text-red-500"
            prefix="Email"
            field="email"
            errors={state.errors}
          />
        </div>
        <div>
          <textarea
            name="message"
            className="text h-[220px] w-full rounded-xl bg-primary/20 px-4 py-2 transition-all placeholder:text-dark/50"
            placeholder="Žinutė..."
            required
          />
          <ValidationError
            className="ml-2 text-red-500"
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <Button disabled={state.submitting} type="submit">
          <Subheading>siųsti</Subheading>
          <BiRightArrowAlt />
        </Button>
      </form>
    </div>
  );
}

export default ContactForm;
