import { useState, useEffect } from "react";
import axios from "axios";

const useGetPosterFromBase64 = () => {
    const [poster, setPoster] = useState();
    

    return [poster, setPoster];
}