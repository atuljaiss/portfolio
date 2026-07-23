import {
  Award,
  BarChart3,
  Briefcase,
  Camera,
  Castle,
  ChevronDown,
  Eye,
  FileText,
  Globe,
  Globe2,
  GraduationCap,
  MapPin,
  MessageCircle,
  Newspaper,
  Phone,
  PieChart,
  PiggyBank,
  Play,
  Send,
  Shield,
  Sparkles,
  Star,
  TrendingUp,
  Users,
} from "lucide-react"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Award,
  BarChart3,
  Briefcase,
  Camera,
  Castle,
  ChevronDown,
  Eye,
  FileText,
  Globe,
  Globe2,
  GraduationCap,
  MapPin,
  MessageCircle,
  Newspaper,
  Phone,
  PieChart,
  PiggyBank,
  Play,
  Send,
  Shield,
  Sparkles,
  Star,
  TrendingUp,
  Users,
}

export function getIcon(name: string) {
  const Icon = iconMap[name]
  if (!Icon) {
    console.warn(`Icon "${name}" not found in iconMap`)
    return null
  }
  return Icon
}

export default iconMap
