import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function index() {
  const router = useRouter();
  useEffect(() => {
    router.push("/traders");
  });


  return (
    <div>
      <center>loading</center>
    </div>
  );
}
