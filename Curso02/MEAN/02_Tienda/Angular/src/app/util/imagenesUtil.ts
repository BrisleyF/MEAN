import { Observable } from "rxjs";

export class ImagenesUtil {

    public static createImageFromBlob(image: Blob) {
        return new Observable( subscribers => {
            let reader = new FileReader();
            reader.readAsDataURL(image);
            
            reader.addEventListener("load", () => {
               subscribers.next(reader.result)
               subscribers.complete()
            })           
        })
    } 

}