import { Card } from "keep-react";

export const CardComponent = () => {
 

    return (
        <>
            <Card className="border-2 rounded-lg h-96 w-80 border-black"> 
            
                <Card.Container className="flex items-center justify-center">
                </Card.Container>
                <Card.Container className="text-center">
                    <Card.Description>
                        
                    </Card.Description>
                </Card.Container>
                <Card.Container className="mt-3 flex items-center justify-center">
                 
                </Card.Container>
            </Card>
        </>
    );
};
