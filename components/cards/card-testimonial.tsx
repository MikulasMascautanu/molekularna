import { cn } from '@/lib/utils';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Quote } from 'lucide-react';

interface CardTestimonialProps {
  quote: string;
  author: string;
  role: string;
  avatarUrl?: string;
  className?: string;
}

export function CardTestimonial({
  quote,
  author,
  role,
  avatarUrl,
  className,
}: CardTestimonialProps) {
  // Get initials from author name for avatar fallback
  const initials = author
    .split(' ')
    .map(part => part[0])
    .join('')
    .toUpperCase();

  return (
    <Card className={cn("overflow-hidden transition-all hover:shadow-lg", className)}>
      <CardContent className="p-6 pt-8 relative">
        <Quote className="absolute top-6 left-6 h-8 w-8 text-primary/20" />
        <div className="relative z-10 pt-4 pl-2">
          <p className="text-muted-foreground italic">"{quote}"</p>
        </div>
      </CardContent>
      <CardFooter className="flex items-center gap-4 border-t bg-muted/40 p-6">
        <Avatar>
          <AvatarImage src={avatarUrl} alt={author} />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm font-medium">{author}</p>
          <p className="text-xs text-muted-foreground">{role}</p>
        </div>
      </CardFooter>
    </Card>
  );
}