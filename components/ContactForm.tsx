"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [status, setStatus] = useState("");
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Address: "",
    Message: "",
    Service: "",
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      Service: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.Name.trim() || !formData.Email.trim()) {
      toast({
        title: "Error: Something is wrong",
        description: "Please input your name and email to continue",
        variant: "destructive",
      });
      return;
    }
    const body = [
      "Portfolio inquiry",
      `Name: ${formData.Name}`,
      `Email: ${formData.Email}`,
      `Phone: ${formData.Phone || "Not provided"}`,
      `Address: ${formData.Address || "Not provided"}`,
      `Service: ${formData.Service || "Not specified"}`,
      `Message: ${formData.Message || "(No message provided)"}`,
    ].join("\n");

    window.open(
      `https://wa.me/8801725986472?text=${encodeURIComponent(body)}`,
      "_blank",
      "noopener,noreferrer"
    );
    setStatus("WhatsApp opened with your message ready. Press Send in WhatsApp to deliver it.");
  };
  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <h3 className="text-2xl md:text-4xl text-lightSky">
        Let&apos;s work together
      </h3>
      <p className="text-white/60 text-sm md:text-base">
        Have a creative project in mind? I&apos;m here to help! Whether you need graphic design, logo design, website design, or mobile app UI/UX, let&apos;s work together to bring your ideas to life. Feel free to contact me anytime!
      </p>
      <>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <Input
                  type="text"
                  id="Name"
                  name="Name"
                  required
                  placeholder="Your name"
                  value={formData.Name}
                  onChange={handleChange}
                />
                <Input
                  type="email"
                  id="Email"
                  name="Email"
                  required
                  placeholder="Email address"
                  value={formData.Email}
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-col md:flex-row gap-4 items-center">
                <Input
                  type="text"
                  id="Phone"
                  name="Phone"
                  placeholder="Phone number"
                  value={formData.Phone}
                  onChange={handleChange}
                />
                <Input
                  type="text"
                  id="Address"
                  name="Address"
                  placeholder="Address"
                  value={formData.Address}
                  onChange={handleChange}
                />
              </div>

              <Textarea
                name="Message"
                placeholder="Text here"
                value={formData.Message}
                onChange={handleChange}
                rows={5}
              />
              <Select onValueChange={handleSelectChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent className="bg-bodyColor text-white border-white/20">
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="est">Graphic Designer</SelectItem>
                    <SelectItem value="cst">UI/UX Design</SelectItem>
                    <SelectItem value="mst">Logo Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <Button
              type="submit"
              className="w-full py-4 bg-lightSky/5 text-white/80 border border-lightSky/20 hover:bg-lightSky/10 hover:border-lightSky hover:text-hoverColor hoverEffect"
            >
            Send via WhatsApp
            </Button>
        {status && (
          <p role="status" className="text-sm text-lightSky">
            {status}
          </p>
        )}
      </>
    </form>
  );
};

export default ContactForm;
