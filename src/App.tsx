import { useState } from "react";
import { z } from "zod";

// enum Hobbies {
//   Cook,
//   Chef,
//   Sleep,
// }

const hobbies = ["Cook", "Chef", "Sleep"] as const;

function App() {
  const [count, setCount] = useState(0);

  const UserSchema = z.object({
    username: z.string(),
    age: z.number().optional(),
    birthday: z.date().optional(),
    isValid: z.boolean().optional(),
    // isValid: z.boolean().optional().nullable(),
    // isValid: z.boolean().optional().nullish(),
    // hobby: z.enum(["Cook", "Chef", "Sleep"]),
    hobby: z.enum(hobbies),
  });

  type User = z.infer<typeof UserSchema>;

  const user: User = {
    username: "hello",
    age: 26,
    birthday: new Date(),
    isValid: true,
    hobby: "Cook",
  };

  // console.log(UserSchema.parse(user));

  // console.log(UserSchema.safeParse(user));

  return <>hello world</>;
}

export default App;
