
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-primary/5 to-secondary/5 pt-16">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center mb-8">
          <Avatar className="h-40 w-40">
            <AvatarImage src="/lovable-uploads/0807ad2c-49ab-494d-8783-a845de31d0b6.png" alt="Thea Anne Mae Mallare" />
            <AvatarFallback>TM</AvatarFallback>
          </Avatar>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 font-signika">
          Hi, I'm Thea Anne Mae Mallare
        </h1>
        <p className="text-xl md:text-2xl text-secondary mb-8 max-w-2xl mx-auto font-quicksand">
          Curiosity-Provoking IT Support Specialist
        </p>
        <Button
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-primary hover:bg-primary/90 text-white"
        >
          Learn More
        </Button>
      </div>
    </section>
  );
};

export default Hero;
