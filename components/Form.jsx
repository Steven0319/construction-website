import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import Button from "./Button";

const Form = () => {
  return (
    <form className="flex flex-col gap-6 w-full max-w-[860px] mx-auto">
      <div className="flex flex-col gap-4">
        <Input
          type="text"
          placeholder="Full Name"
          className="h-[54px] text-base rounded-md"
        />
        <Input
          type="email"
          placeholder="Email address"
          className="h-[54px] text-base rounded-md"
        />
        <div className="flex flex-col xl:flex-row gap-4">
          <Input
            type="tel"
            placeholder="Phone number"
            className="h-[54px] text-base rounded-md w-full"
          />
          <Select>
            <SelectTrigger className="h-[54px] text-base rounded-md w-full text-secondary outline-none border border-input bg-transparent">
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Select a service</SelectLabel>
                <SelectItem value="construction">Construction</SelectItem>
                <SelectItem value="renovation">Renovation</SelectItem>
                <SelectItem value="restoration">Restoration</SelectItem>
                <SelectItem value="consulting">Consulting</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <Textarea
        className="h-[180px] resize-none rounded-md text-base"
        placeholder="Enter your message"
      />
      <Button text="Send message" />
    </form>
  );
};

export default Form;
