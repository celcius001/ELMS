'use client';
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import z, { set } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { roleSchema } from '@/lib/zodSchemas';
import { useForm } from 'react-hook-form';
import { createRole } from '@/lib/actions/createRole';
import { redirect } from 'next/navigation';
const AccountPage = () => {
  const [message, setMessage] = React.useState<string | null>(null);
  const form = useForm<z.infer<typeof roleSchema>>({
    resolver: zodResolver(roleSchema),
    defaultValues: {
      role: '',
      description: '',
    },
  });
  const onSubmit = async (data: z.infer<typeof roleSchema>) => {
    console.log(data);
    // Here you would typically call your createRole function
    const res = await createRole(data);

    if (res.success) {
      redirect('/'); // Redirect to a success page or home
    } else {
      setMessage('Error creating role: ' + res.error);
    }
  };
  return (
    <Form {...form}>
      <form className="flex items-center justify-center" onSubmit={form.handleSubmit(onSubmit)}>
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Create Role</CardTitle>
            <CardDescription>Enter Role Details</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <FormField
                  control={form.control}
                  name="role"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Role</FormLabel>
                      <FormControl>
                        <Input {...field} id="role" placeholder="Admin" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                ></FormField>
              </div>
              <div className="grid gap-2">
                <div className="flex flex-col gap-2">
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Description</FormLabel>
                        <FormControl>
                          <Textarea {...field} id="description" placeholder="Describe the role" />
                        </FormControl>
                        <FormMessage />
                        {message && <p className="text-red-500">{message}</p>}
                      </FormItem>
                    )}
                  ></FormField>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
};

export default AccountPage;
