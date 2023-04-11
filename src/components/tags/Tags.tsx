import React from 'react';
import { useEffect , useState } from 'react';
import { useLocation } from 'react-router-dom';

function Tags(props: {example: number}) {
    const location = useLocation();
    const [tagsArr, setTagsArr] = useState(['']);
    const [formState, setFormState] = useState({
        color: ''
    });

    const [errorMessage, setErrorMessage] = useState('');

    useEffect(()=> {
        const setTags = () => {
            let tags: string = '';

            if (location && location.hash) {
                tags = location.hash.replace(/^#tags=/, '');
                setTagsArr(tags.split(','));
            }
        }
        setTags();
    }, [location]);

    const handleInputChange = (event: any) => {
        const { name, value } = event.target;
        setFormState((prevProps) => ({
           ...prevProps,
                [name]: value
        }));
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();

        if (formState && validateColor(formState.color)) {
            addTag(formState.color);
        }
    }

    const validateColor = (color: string) => {
        let result: boolean = true;

        if (color === '') {
            setErrorMessage('Please enter a color name.');
            result = false;
        }

        if (color.length > 50) {
            setErrorMessage('The entered color cannot be more than 50 characters long.');
            result = false;
        }

        if (color !== '' && tagsArr.some(x => x === color)) {
            setErrorMessage('This color name is already saved. Please enter a different color name.');
            result = false;
        }

        return result;
    }

    const addTag = (color: string) => {
        const tagsString: string = tagsArr.join();
        let comma: string = '';

        if (tagsString !== '') {
            comma = ',';
        }

        window.location.hash = `#tags=${tagsString}${comma}${color}`;
        setErrorMessage('');
    }

    const removeTag = (color: string) => {
        let confirm: boolean = window.confirm('Are you sure you want to remove this color?');
        if (confirm) {
            let newTags: string = location.hash.replace(',' + color, '').replace(color + ',', '').replace(color, '');
            window.location.hash = `${newTags}`;
        }
        setErrorMessage('');
    }

    return (
        <div className="container example">
            <div className="row h2-headline">
                <h2>Component example #{props.example}</h2>
            </div>
            {tagsArr && tagsArr.length > 0 && tagsArr[0] !== '' &&
            <div className="row">
                <ul className="list-group">
                    {tagsArr.map((item) => {
                        return (
                            <li
                                key={item}
                                className="list-group-item"
                            ><span className="list-item-span">{item}</span><button type="button" className="btn btn-outline-danger" onClick={() => removeTag(item)}>Remove</button>
                            </li>
                        )}
                    )}
                </ul>
            </div>
            }

            <div className="row form">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <div className="row">
                            <div className="col-6">
                                <label form="color">Color:</label>
                            </div>
                            <div className="col-6">
                                <input type="text" className="form-control" name="color" placeholder="Enter color" value={formState.color} onChange={handleInputChange} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="offset-6 col-6">
                                <p className="error-message">{errorMessage}</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="offset-6 col-6">
                            <button type="submit" className="btn btn-primary">Add color</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Tags
