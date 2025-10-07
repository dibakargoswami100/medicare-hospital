-- Create appointments table
CREATE TABLE public.appointments (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  department TEXT NOT NULL,
  appointment_date TEXT NOT NULL,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add unique constraint to prevent duplicate bookings
CREATE UNIQUE INDEX unique_appointment ON public.appointments(email, appointment_date);

-- Enable Row Level Security
ALTER TABLE public.appointments ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert appointments (public booking form)
CREATE POLICY "Anyone can insert appointments"
ON public.appointments
FOR INSERT
TO public
WITH CHECK (true);

-- Create policy to allow authenticated users to view all appointments
CREATE POLICY "Authenticated users can view appointments"
ON public.appointments
FOR SELECT
TO authenticated
USING (true);