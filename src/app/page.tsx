import { Shield, User, HelpCircle, Settings, Activity } from 'lucide-react'
import Link from 'next/link'
import SOSButton from './SOSButton'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-100">
      <main className="flex flex-col justify-center items-center px-4 py-12">
        <div className="text-center max-w-2xl">
          <Shield className="h-24 w-24 text-purple-600 mx-auto mb-8" aria-hidden="true" />
          <h1 className="text-4xl font-bold text-purple-800 mb-4">Welcome to Naari Sahyog</h1>
          <p className="text-xl text-gray-700 mb-8">Your safety companion app, empowering women with peace of mind.</p>
          <SOSButton />
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl w-full">
          <FeatureCard
            icon={<User className="h-10 w-10 text-purple-600" />}
            title="Profile"
            description="View and edit your personal information."
            link="/profile"
          />
          <FeatureCard
            icon={<Settings className="h-10 w-10 text-purple-600" />}
            title="Settings"
            description="Customize your app preferences."
            link="/settings"
          />
          <FeatureCard
            icon={<Activity className="h-10 w-10 text-purple-600" />}
            title="Ring Status"
            description="Check your safety ring's status."
            link="/ring-status"
          />
          <FeatureCard
            icon={<HelpCircle className="h-10 w-10 text-purple-600" />}
            title="Help"
            description="Get assistance and support."
            link="/help"
          />
        </div>
      </main>
    </div>
  )
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, link }) => {
  return (
    <Link href={link} className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
      {icon}
      <h3 className="text-xl font-semibold text-purple-800 mt-4 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </Link>
  )
}