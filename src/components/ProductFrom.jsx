import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { URL } from "@/constants/constant";

const formSchema = z.object({
  nameOfProduct: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  image: z.string(),
  type: z.enum(["male", "female", "other"], {
    required_error: "You need to select a notification type.",
  }),
  category: z.enum(["shirt", "jeans", "other"], {
    required_error: "Select a type",
  }),
  dob: z.date({
    required_error: "A date of birth is required.",
  }),
});

const ProductForm = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nameOfProduct: "",
      image: "",
      type: "",
      category: "",
      dob: "",
    },
  });

  const onSubmit = (values) => {
    console.log(values);
    fetch("https://fakestoreapi.com/products", {
      method: "POST",
      body: JSON.stringify({
        title: values.nameOfProduct,
        dob: values.dob,
        type: values.type,
        image: values.image,
        category: values.category,
      }),
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
  };

  return (
    <div className={`bg-[url(${URL})] max-w-md mx-auto p-6 bg-white rounded-lg shadow-md`}>
      <Form {...form} className="space-y-6">
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="nameOfProduct"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name of Product</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter product name"
                    {...field}
                    className="border rounded-md px-3 py-2"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Upload Product Image</FormLabel>
                <FormControl>
                  <Input
                    type="file"
                    {...field}
                    className="border rounded-md px-3 py-2"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Gender</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="space-y-2"
                  >
                    <FormItem className="flex items-center space-x-3">
                      <FormControl>
                        <RadioGroupItem value="male" />
                      </FormControl>
                      <FormLabel>Male</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3">
                      <FormControl>
                        <RadioGroupItem value="female" />
                      </FormControl>
                      <FormLabel>Female</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3">
                      <FormControl>
                        <RadioGroupItem value="other" />
                      </FormControl>
                      <FormLabel>Other</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Product Category</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="border rounded-md px-3 py-2"
                >
                  <FormControl>
                    <SelectTrigger className="border rounded-md px-3 py-2">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="shirt">Shirt</SelectItem>
                    <SelectItem value="jeans">Jeans</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="dob"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Date of Manufacturing</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full text-left",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ProductForm;
