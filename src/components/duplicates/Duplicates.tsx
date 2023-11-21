import {useEffect, useState} from "react";

export function Duplicates() {
    const [dupliciteArr, setDupliciteArr] = useState([0]);
    const [uniqueArr, setUniqueArr] = useState([0]);

    useEffect(() => {
        const setFoundDuplicates = (): void => {
            const all: number[] = [2, 4, 6, 7, 4, 3, 5, 2];

            const duplicates: number[] = all.filter((item, index) => all.indexOf(item) !== index);
            setDupliciteArr(duplicates);

            const uniques: number[] = all.filter((item, index) => all.indexOf(item) === index);
            setUniqueArr(uniques);
        }
        setFoundDuplicates();
    }, []);

    return (
        <div className="row">
            <div className="col-4">
                {dupliciteArr && dupliciteArr.length > 0 && dupliciteArr[0] !== 0 &&
                    <ul>
                        {dupliciteArr.map((item, index) => {
                            return (
                                <li key={index}>{item}</li>
                            )
                        }
                        )}
                    </ul>
                }
            </div>
            <div className="col-4">
                {uniqueArr && uniqueArr.length > 0 && uniqueArr[0] !== 0 &&
                    <ul>
                        {uniqueArr.map((item, index) => {
                            return (
                                <li key={index}>{item}</li>
                            )
                        }
                        )}
                    </ul>
                }
            </div>
        </div>
    )
}