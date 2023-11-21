import {useEffect, useState} from "react";

export function Duplicates() {
    const [numberArr, setNumberArr] = useState([0]);

    useEffect((): void => {
        const setFoundDuplicates = (): void => {
            const all: number[] = [2, 4, 6, 7, 4, 3, 5, 2];
            const duplicates: number[] = all.filter((item, index) => all.indexOf(item) !== index);
            setNumberArr(duplicates);
        }
        setFoundDuplicates();
    });

    return (
        <div className="row">
            <div className="col-4">
                {numberArr && numberArr.length > 0 && numberArr[0] !== 0 &&
                    <ul>
                        {numberArr.map((item, index) => {
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