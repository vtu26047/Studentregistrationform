import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'motion/react';
import { toast } from 'sonner';
import { 
  User, 
  Calendar, 
  MapPin, 
  Mail, 
  Phone, 
  School, 
  Users, 
  ChevronRight, 
  CheckCircle2,
  AlertCircle,
  GraduationCap
} from 'lucide-react';

// Define form data types
type FormData = {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  gender: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  zipCode: string;
  previousSchool: string;
  gradeApplyingFor: string;
  guardianName: string;
  guardianRelation: string;
  guardianPhone: string;
  guardianEmail: string;
  emergencyContactName: string;
  emergencyContactPhone: string;
  medicalConditions: string;
};

export function StudentRegistrationForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (data: FormData) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log("Form Data:", data);
    setSubmitted(true);
    toast.success("Registration submitted successfully!");
    
    // In a real app with Supabase, we would insert data here
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full text-center"
        >
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-slate-800 mb-2">Registration Complete!</h2>
          <p className="text-slate-600 mb-8">
            Thank you for registering. We have received your application and will contact you shortly regarding the next steps.
          </p>
          <button 
            onClick={() => {
              setSubmitted(false);
              reset();
            }}
            className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors w-full"
          >
            Register Another Student
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        {/* Header Section */}
        <div className="bg-white rounded-t-2xl shadow-sm overflow-hidden mb-6">
          <div className="h-48 bg-slate-200 relative">
            <img 
              src="https://images.unsplash.com/photo-1730106443463-0fb1512c5e60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBidWlsZGluZyUyMG1vZGVybiUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzA3OTIyMjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
              alt="School Campus" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent flex items-end">
              <div className="p-8">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Student Registration Form</h1>
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-white/10 p-1.5 rounded-lg backdrop-blur-sm">
                    <GraduationCap className="w-6 h-6 md:w-8 md:h-8 text-indigo-100" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-semibold text-indigo-100">Veltech University</h2>
                </div>
                <p className="text-slate-200 text-sm md:text-base">Academic Year 2026-2027</p>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          
          {/* Section 1: Student Information */}
          <section className="bg-white rounded-2xl shadow-sm p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
              <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                <User size={20} />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-slate-800">Student Information</h2>
                <p className="text-sm text-slate-500">Personal details of the applicant</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">First Name <span className="text-red-500">*</span></label>
                <input
                  {...register("firstName", { required: "First name is required" })}
                  className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                  placeholder="e.g. John"
                />
                {errors.firstName && <p className="text-xs text-red-500 mt-1 flex items-center gap-1"><AlertCircle size={12} /> {errors.firstName.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Last Name <span className="text-red-500">*</span></label>
                <input
                  {...register("lastName", { required: "Last name is required" })}
                  className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                  placeholder="e.g. Doe"
                />
                {errors.lastName && <p className="text-xs text-red-500 mt-1 flex items-center gap-1"><AlertCircle size={12} /> {errors.lastName.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Date of Birth <span className="text-red-500">*</span></label>
                <div className="relative">
                  <input
                    type="date"
                    {...register("dateOfBirth", { required: "Date of birth is required" })}
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                  />
                  <Calendar className="absolute right-3 top-2.5 text-slate-400 pointer-events-none" size={18} />
                </div>
                {errors.dateOfBirth && <p className="text-xs text-red-500 mt-1 flex items-center gap-1"><AlertCircle size={12} /> {errors.dateOfBirth.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Gender <span className="text-red-500">*</span></label>
                <select
                  {...register("gender", { required: "Gender is required" })}
                  className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all bg-white"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                  <option value="prefer_not_to_say">Prefer not to say</option>
                </select>
                {errors.gender && <p className="text-xs text-red-500 mt-1 flex items-center gap-1"><AlertCircle size={12} /> {errors.gender.message}</p>}
              </div>
            </div>
          </section>

          {/* Section 2: Contact Details */}
          <section className="bg-white rounded-2xl shadow-sm p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                <MapPin size={20} />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-slate-800">Contact Details</h2>
                <p className="text-sm text-slate-500">Address and communication details</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-medium text-slate-700">Street Address <span className="text-red-500">*</span></label>
                <input
                  {...register("address", { required: "Address is required" })}
                  className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="123 Main St, Apt 4B"
                />
                {errors.address && <p className="text-xs text-red-500 mt-1 flex items-center gap-1"><AlertCircle size={12} /> {errors.address.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">City <span className="text-red-500">*</span></label>
                <input
                  {...register("city", { required: "City is required" })}
                  className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="New York"
                />
                {errors.city && <p className="text-xs text-red-500 mt-1 flex items-center gap-1"><AlertCircle size={12} /> {errors.city.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Zip / Postal Code <span className="text-red-500">*</span></label>
                <input
                  {...register("zipCode", { required: "Zip code is required" })}
                  className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="10001"
                />
                {errors.zipCode && <p className="text-xs text-red-500 mt-1 flex items-center gap-1"><AlertCircle size={12} /> {errors.zipCode.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Student Email (Optional)</label>
                <div className="relative">
                  <input
                    type="email"
                    {...register("email")}
                    className="w-full px-4 py-2 pl-10 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="student@example.com"
                  />
                  <Mail className="absolute left-3 top-2.5 text-slate-400" size={18} />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Student Phone (Optional)</label>
                <div className="relative">
                  <input
                    type="tel"
                    {...register("phone")}
                    className="w-full px-4 py-2 pl-10 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="(555) 123-4567"
                  />
                  <Phone className="absolute left-3 top-2.5 text-slate-400" size={18} />
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Academic Information */}
          <section className="bg-white rounded-2xl shadow-sm p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
              <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
                <School size={20} />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-slate-800">Academic History</h2>
                <p className="text-sm text-slate-500">Previous education and application details</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Previous School Attended</label>
                <input
                  {...register("previousSchool")}
                  className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                  placeholder="School Name"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Grade Applying For <span className="text-red-500">*</span></label>
                <select
                  {...register("gradeApplyingFor", { required: "Grade is required" })}
                  className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all bg-white"
                >
                  <option value="">Select Grade</option>
                  {[...Array(12)].map((_, i) => (
                    <option key={i} value={`Grade ${i + 1}`}>Grade {i + 1}</option>
                  ))}
                  <option value="Kindergarten">Kindergarten</option>
                </select>
                {errors.gradeApplyingFor && <p className="text-xs text-red-500 mt-1 flex items-center gap-1"><AlertCircle size={12} /> {errors.gradeApplyingFor.message}</p>}
              </div>
            </div>
          </section>

          {/* Section 4: Parent/Guardian & Emergency */}
          <section className="bg-white rounded-2xl shadow-sm p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
              <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                <Users size={20} />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-slate-800">Parent / Guardian</h2>
                <p className="text-sm text-slate-500">Primary contact and emergency information</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Guardian Name <span className="text-red-500">*</span></label>
                <input
                  {...register("guardianName", { required: "Guardian name is required" })}
                  className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                  placeholder="Parent Full Name"
                />
                {errors.guardianName && <p className="text-xs text-red-500 mt-1 flex items-center gap-1"><AlertCircle size={12} /> {errors.guardianName.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Relationship <span className="text-red-500">*</span></label>
                <select
                  {...register("guardianRelation", { required: "Relationship is required" })}
                  className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all bg-white"
                >
                  <option value="">Select Relationship</option>
                  <option value="Father">Father</option>
                  <option value="Mother">Mother</option>
                  <option value="Grandparent">Grandparent</option>
                  <option value="Legal Guardian">Legal Guardian</option>
                  <option value="Other">Other</option>
                </select>
                {errors.guardianRelation && <p className="text-xs text-red-500 mt-1 flex items-center gap-1"><AlertCircle size={12} /> {errors.guardianRelation.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Phone Number <span className="text-red-500">*</span></label>
                <div className="relative">
                  <input
                    type="tel"
                    {...register("guardianPhone", { required: "Guardian phone is required" })}
                    className="w-full px-4 py-2 pl-10 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                    placeholder="(555) 123-4567"
                  />
                  <Phone className="absolute left-3 top-2.5 text-slate-400" size={18} />
                </div>
                {errors.guardianPhone && <p className="text-xs text-red-500 mt-1 flex items-center gap-1"><AlertCircle size={12} /> {errors.guardianPhone.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Email Address <span className="text-red-500">*</span></label>
                <div className="relative">
                  <input
                    type="email"
                    {...register("guardianEmail", { required: "Guardian email is required" })}
                    className="w-full px-4 py-2 pl-10 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                    placeholder="parent@example.com"
                  />
                  <Mail className="absolute left-3 top-2.5 text-slate-400" size={18} />
                </div>
                {errors.guardianEmail && <p className="text-xs text-red-500 mt-1 flex items-center gap-1"><AlertCircle size={12} /> {errors.guardianEmail.message}</p>}
              </div>

              <div className="md:col-span-2 mt-4 pt-4 border-t border-slate-100">
                <h3 className="text-md font-medium text-slate-800 mb-4">Emergency Contact (If different from Guardian)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Contact Name</label>
                    <input
                      {...register("emergencyContactName")}
                      className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                      placeholder="Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Contact Phone</label>
                    <input
                      {...register("emergencyContactPhone")}
                      className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                      placeholder="Phone Number"
                    />
                  </div>
                </div>
              </div>

               <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-medium text-slate-700">Medical Conditions / Allergies</label>
                <textarea
                  {...register("medicalConditions")}
                  rows={3}
                  className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Please list any medical conditions, allergies, or special needs..."
                />
              </div>
            </div>
          </section>

          <div className="flex justify-end pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`
                px-8 py-4 bg-indigo-600 text-white font-semibold rounded-xl shadow-lg 
                hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-200 transition-all 
                flex items-center gap-2
                ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:translate-y-[-2px]'}
              `}
            >
              {isSubmitting ? (
                <>Processing...</>
              ) : (
                <>Submit Registration <ChevronRight size={20} /></>
              )}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
