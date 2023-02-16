import { Button, FormControl, FormLabel, Input, Sheet, Typography } from "@mui/joy";
import React from "react";

export default function Home() {
  return (
    <div>
      <div className="max-w-[800px] mx-auto mt-12 ">
        <Sheet
          variant="plain"
          sx={{
            py: 4,
            px: 4,
            borderRadius: 12,
            mt: 4,
          }}
        >
          <Typography level="h5" fontWeight="md">
            Enter your OpenAi Api key to get started
          </Typography>

          <Typography textColor="text.secondary">We do not save your API key! Your key is encrypted and stored in the URL for the duration of your session so that you don't need to enter it again if you reload the page.</Typography>
          <form
            className="flex flex-col gap-4 mt-6"
            onSubmit={(event: any) => {
              event.preventDefault();
              const formElements = event.currentTarget.elements;
              const data = {
                email: formElements.email.value,
                password: formElements.password.value,
                persistent: formElements.persistent.checked,
              };
              alert(JSON.stringify(data, null, 2));
            }}
          >
            <FormControl required>
              <FormLabel>Input API key</FormLabel>
              <Input placeholder="Bearer" type="text" name="bearer" />
            </FormControl>

            <Button type="submit" fullWidth>
              Start
            </Button>
          </form>
        </Sheet>
      </div>
    </div>
  );
}
