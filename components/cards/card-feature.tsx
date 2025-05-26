import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';

interface CardFeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

export function CardFeature({
  icon,
  title,
  description,
  className,
}: CardFeatureProps) {
  return (
    <Card className={cn("overflow-hidden transition-all hover:shadow-lg", className)}>
      <CardContent className="p-6 space-y-4">
        <div className="rounded-lg bg-primary/10 p-3 w-fit">
          {icon}
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-sm text-muted-foreground">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}