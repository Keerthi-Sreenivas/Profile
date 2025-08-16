import { useState } from "react";
import { Button } from "@/components/ui/button";
import { removeBackground, loadImage, addProfessionalBackground } from "@/utils/imageProcessor";
import { useToast } from "@/hooks/use-toast";

const ImageProcessor = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  const processProfileImage = async () => {
    setIsProcessing(true);
    
    try {
      // Fetch the current profile image
      const response = await fetch('/lovable-uploads/634d3fe4-37c8-4d9d-b55b-3fcd08dc66af.png');
      const blob = await response.blob();
      
      // Load the image
      const imageElement = await loadImage(blob);
      
      // Remove background
      toast({
        title: "Processing",
        description: "Removing background...",
      });
      
      const backgroundRemovedBlob = await removeBackground(imageElement);
      const backgroundRemovedImage = await loadImage(backgroundRemovedBlob);
      
      // Add professional background
      toast({
        title: "Processing",
        description: "Adding professional background...",
      });
      
      const professionalBlob = await addProfessionalBackground(backgroundRemovedImage);
      
      // Create download link
      const url = URL.createObjectURL(professionalBlob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'professional-profile.png';
      a.click();
      URL.revokeObjectURL(url);
      
      toast({
        title: "Success!",
        description: "Professional profile image has been generated and downloaded.",
      });
      
    } catch (error) {
      console.error('Error processing image:', error);
      toast({
        title: "Error",
        description: "Failed to process the image. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="flex justify-center mt-8">
      <Button 
        onClick={processProfileImage}
        disabled={isProcessing}
        className="bg-primary hover:bg-primary/90"
      >
        {isProcessing ? "Processing..." : "Create Professional Profile"}
      </Button>
    </div>
  );
};

export default ImageProcessor;