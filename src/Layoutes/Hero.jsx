import React from 'react';
import { Search, Briefcase, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <div className="">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center space-y-8">
          <h1 className="text-5xl font-bold text-gray-900 tracking-tight sm:text-6xl dark:text-white">
            Find Your Dream Job
            <span className="block text-[#0891b2]">Build Your Future</span>
          </h1>

          <p className="max-w-2xl mx-auto text-xl text-gray-500">
            Connect with top companies and opportunities that match your skills and aspirations.
            Your next career move starts here.
          </p>

          {/* Search Box */}
          <div className="max-w-2xl mx-auto mt-8 border rounded-lg">
            <div className="flex gap-4 p-2 bg-card  rounded-lg shadow-lg">
              <div className="flex-1 flex items-center px-4 border-r">
                <Search className="w-5 h-5 text-gray-400 mr-3" />
                <input
                  type="text"
                  placeholder="Job title or keyword"
                  className="w-full focus:outline-none text-gray-700 bg-card "
                />
              </div>
              <Button>Search Jobs</Button>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-6">
            <div className="p-6 border bg-card rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center mb-4 mx-auto dark:border ">
                <Briefcase className="w-6 h-6 dark:text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">10k+ Jobs</h3>
              <p className="text-muted-foreground mt-2">New opportunities added daily</p>
            </div>
            <div className="p-6 border bg-card rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center mb-4 mx-auto dark:border ">
                <TrendingUp className="w-6 h-6 dark:text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">10k+ Jobs</h3>
              <p className="text-muted-foreground mt-2">New opportunities added daily</p>
            </div>
            <div className="p-6 border bg-card rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center mb-4 mx-auto dark:border ">
                <Search className="w-6 h-6 dark:text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">10k+ Jobs</h3>
              <p className="text-muted-foreground mt-2">New opportunities added daily</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
