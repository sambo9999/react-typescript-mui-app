import React from "react";

export const MakeFullName = <T extends { firstName: string; lastName: string }>(
  obj: T
) => {
  return {
    ...obj,
    fullName: obj.firstName + " " + obj.lastName,
  };
};

const GetFullName = MakeFullName({ firstName: "sambo", lastName: "suong" });
