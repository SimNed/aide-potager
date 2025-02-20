import helloWorld from "@/lib/db";
import React from "react";

export default async function AssistantPage() {
  const dbHello = await helloWorld();

  return <p>DBHELLO : {JSON.stringify(dbHello)}</p>;
}

export const runtime = "edge";
export const preferredRegion = "fra1";
