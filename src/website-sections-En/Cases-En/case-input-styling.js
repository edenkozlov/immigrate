function MyStyling() {
    return (
        <div>
            <style>
                            {`
                            .modal-header {display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;}
                            .modal-buttons {display: flex; align-items: center; }
                            .modal-close {margin-left: 10px;}
                            .modal-submit {color: #fff; padding: 8px 16px; border: none; border-radius: 4px;}
                            .myrowfr {display: grid; grid-template-columns: repeat(3, 1fr); grid-gap: 10px; margin-bottom: 10px;}
                            .myrowfr input {margin-right: 10px;}
                            @media (max-width: 600px) {.myrowfr {display: grid; grid-template-columns: 1fr; grid-gap: 10px; margin-bottom: 10px;}}
                            `}
                        </style>

                        
        </div>
    )
}

export default MyStyling;