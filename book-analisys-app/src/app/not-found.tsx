import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { XCircle } from "lucide-react"

export const NotFoundPage = () => (
    <div className="flex items-center justify-center h-full">
        <Alert className="w-full max-w-md">
            <XCircle className="h-4 w-4" />
            <AlertTitle>Not Found</AlertTitle>
            <AlertDescription>
                The requested resource could not be found.
            </AlertDescription>
        </Alert>
    </div>
);