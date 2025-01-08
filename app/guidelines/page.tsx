'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function GuidelinesPage() {
  return (
    <div className="container mx-auto px-4 py-32">
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle>Application Guidelines</CardTitle>
          <CardDescription>
            Everything you need to know about the ID card application process
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold mb-4">Application Steps</h2>
              <ol className="space-y-4 list-decimal list-inside">
                <li>Fill out the personal information form</li>
                <li>Upload required documents and photo</li>
                <li>Review your application</li>
                <li>Make payment</li>
                <li>Submit your application</li>
              </ol>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Document Requirements</h2>
              <ul className="space-y-2">
                <li>✓ Valid government-issued ID</li>
                <li>✓ Recent passport-sized photo</li>
                <li>✓ Proof of address</li>
                <li>✓ Completed application form</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How long does the process take?</AccordionTrigger>
                  <AccordionContent>
                    The typical processing time is 5-7 business days from the date of application submission.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>What payment methods are accepted?</AccordionTrigger>
                  <AccordionContent>
                    We accept all major credit cards (Visa, MasterCard, American Express) and debit cards.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>What if my application is rejected?</AccordionTrigger>
                  <AccordionContent>
                    If your application is rejected, you will receive a detailed explanation and instructions for reapplication. The application fee is refundable in case of rejection.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}