import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Clock, Shield, Activity } from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Apply for Your ID Card Online
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Secure, quick, and hassle-free ID card registration process at your fingertips
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/register">Register ID Card</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/track">Track Your Request</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="transform transition-all duration-300 hover:scale-105">
              <CardHeader>
                <Clock className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Quick Registration</CardTitle>
                <CardDescription>
                  Complete your ID card registration in less than 5 minutes with our streamlined process
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="transform transition-all duration-300 hover:scale-105">
              <CardHeader>
                <Activity className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Real-Time Status</CardTitle>
                <CardDescription>
                  Track your application status in real-time with instant updates at every stage
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="transform transition-all duration-300 hover:scale-105">
              <CardHeader>
                <Shield className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Secure Upload</CardTitle>
                <CardDescription>
                  Your documents are protected with enterprise-grade security and encryption
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}