import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

export default function TrackPage() {
  return (
    <div className="container mx-auto px-4 py-32">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Track Your Application</CardTitle>
          <CardDescription>
            Enter your Request ID or Email to check your application status
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <Input placeholder="Enter Request ID or Email" className="flex-1" />
            <Button>
              <Search className="mr-2 h-4 w-4" />
              Track
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}