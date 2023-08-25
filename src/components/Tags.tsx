import React from "react";

type Props = {
  name: string;
};

export default function Tags({ name }: Props) {
  return <div className="ml-2 mt-2 rounded-lg bg-[#464545] p-3">{name}</div>;
}
