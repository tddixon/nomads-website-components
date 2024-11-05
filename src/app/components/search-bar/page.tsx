import { DatePickerWithRange } from "@/components/date-picker";
import {
  Select,
  SelectItem,
  SelectContent,
  SelectGroup,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";

type Props = {};

function SearchBarPage({}: Props) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex flex-row items-center gap-4 p-4  px-12 rounded-[32px] shadow-sm border-[0.5px] border-gray-200">
        <div className="flex items-bottom flex-row gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-500"
          >
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <form className="flex-1">
            <label className="block mb-2 text-sm font-medium">Location</label>
            <Select>
              <SelectTrigger className="w-full border-0">
                <SelectValue placeholder="Where would you like to stay?" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="new-york">New York</SelectItem>
                  <SelectItem value="london">London</SelectItem>
                  <SelectItem value="paris">Paris</SelectItem>
                  <SelectItem value="tokyo">Tokyo</SelectItem>
                  <SelectItem value="dubai">Dubai</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </form>
        </div>

        <div className="flex items-bottom flex-row gap-2">
          <form className="flex-1">
            <label className="block mb-2 text-sm font-medium">
              Check-in Date
            </label>
            <DatePickerWithRange />
          </form>
        </div>

        <div className="flex items-bottom flex-row gap-2">
          <form className="flex-1">
            <label className="block mb-2 text-sm font-medium">Guests</label>
            <Select>
              <SelectTrigger className="w-full border-0">
                <SelectValue placeholder="Number of guests" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="1">1 Guest</SelectItem>
                  <SelectItem value="2">2 Guests</SelectItem>
                  <SelectItem value="3">3 Guests</SelectItem>
                  <SelectItem value="4">4 Guests</SelectItem>
                  <SelectItem value="5">5+ Guests</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </form>
        </div>
        <button
          type="submit"
          className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBarPage;
