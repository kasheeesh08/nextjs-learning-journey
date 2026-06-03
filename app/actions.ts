"use server";

export async function submitForm(
  formData: FormData
) {
  const name = formData.get("name");

  console.log("Name:", name);
}