
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useUser } from "@clerk/clerk-react";

import { UserSearch, ClipboardList } from 'lucide-react';
import { ThreeDots } from 'react-loader-spinner';
import { useNavigate } from "react-router";

// const categories = [
//   { name: "Recruiter", subittle: "I want to post a job", icon: UserSearch },
//   { name: "Applicant", subittle: "I'm looking for job", icon: ClipboardList },
// ]

export default function Onboarding() {
  const { user, isLoaded } = useUser();
  const navigate = useNavigate();
  // console.log(user);

  const navigateUser = (currentRole) => {
    navigate(currentRole === "applicant" ? "/jobs" : "/post-job");
  };

  const handleUserRole = async (role) => {
    await user.update({ unsafeMetadata: { role } }).then(() => {
      console.log(`role changed to ${role}`);
      navigateUser(role);
    });
  };

 

  if(user?.unsafeMetadata?.role){
    navigateUser(user.unsafeMetadata.role);
  }
 


  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center h-[394px]">
        <ThreeDots
          visible={true}
          height="75"
          width="75"
          color="#0891b2"
          radius="9"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
        />
      </div>
    );
  }

  return (
    <section className="py-16">
      <div className="max-w-[700px] mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Choose your Role</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 pt-6">
          
          {/* Recruiter Card */}
          <Card
            className="group text-center border-0 hover:bg-primary transition duration-75 dark:border cursor-pointer"
            onClick={() => handleUserRole("recruiter")}
          >
            <CardHeader>
              <UserSearch className="group-hover:text-white mx-auto h-12 w-12 text-primary" />
              <CardTitle className="group-hover:text-white">Recruiter</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground group-hover:text-white">I want to post a job</p>
            </CardContent>
          </Card>

          {/* Applicant Card */}
          <Card
            className="group text-center border-0 hover:bg-primary transition duration-75 dark:border cursor-pointer"
            onClick={() => handleUserRole("applicant")}
          >
            <CardHeader>
              <ClipboardList className="group-hover:text-white mx-auto h-12 w-12 text-primary" />
              <CardTitle className="group-hover:text-white">Applicant</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground group-hover:text-white">I'm looking for a job</p>
            </CardContent>
          </Card>

        </div>
      </div>
      
      
    </section>
    
  );
}
