"use client";
import { Spotlight } from "@/components/ui/spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Button as MovingButton } from "@/components/ui/moving-border";
import { Button } from "@/components/ui/button";

export default function AceternityDemo() {
  const words = "Welcome to Aceternity UI - Beautiful components for modern web apps";

  return (
    <div className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      {/* Spotlight Effect */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      
      {/* Background Beams */}
      <BackgroundBeams className="opacity-20" />

      <div className="relative z-10 w-full h-full">
        <div className="max-w-7xl mx-auto p-5 md:p-10">
          {/* Header Section */}
          <div className="text-center space-y-8 pt-20 pb-16">
            <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              Aceternity UI
            </h1>
            
            {/* Text Generate Effect */}
            <TextGenerateEffect 
              words={words} 
              className="text-center text-neutral-300 max-w-2xl mx-auto"
            />
          </div>

          {/* Demo Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {/* Card 1 */}
            <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-lg p-6 space-y-4">
              <h3 className="text-xl font-semibold text-white">Spotlight Effect</h3>
              <p className="text-neutral-400">
                Beautiful spotlight effects that follow your cursor and create stunning visual experiences.
              </p>
              <Button variant="outline" className="border-neutral-700 text-neutral-300 hover:bg-neutral-800">
                Learn More
              </Button>
            </div>

            {/* Card 2 */}
            <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-lg p-6 space-y-4">
              <h3 className="text-xl font-semibold text-white">Text Animation</h3>
              <p className="text-neutral-400">
                Animated text effects that generate word by word with smooth transitions.
              </p>
              <Button variant="outline" className="border-neutral-700 text-neutral-300 hover:bg-neutral-800">
                Explore
              </Button>
            </div>

            {/* Card 3 */}
            <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-lg p-6 space-y-4">
              <h3 className="text-xl font-semibold text-white">Background Beams</h3>
              <p className="text-neutral-400">
                Animated background beams that create depth and movement in your designs.
              </p>
              <Button variant="outline" className="border-neutral-700 text-neutral-300 hover:bg-neutral-800">
                Discover
              </Button>
            </div>
          </div>

          {/* Moving Border Button Demo */}
          <div className="flex justify-center mt-16">
            <MovingButton
              borderRadius="1.75rem"
              className="bg-neutral-900 text-white border-neutral-700"
            >
              Moving Border Button
            </MovingButton>
          </div>

          {/* Footer */}
          <div className="text-center mt-20 pb-10">
            <p className="text-neutral-400">
              Built with Next.js, Tailwind CSS, and Framer Motion
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
