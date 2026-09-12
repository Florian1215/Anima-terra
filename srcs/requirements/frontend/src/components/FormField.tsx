import {ChangeEvent} from "react";

type FieldType = "text" | "email" | "tel" | "textarea" | "select";

const fieldClass = "w-full px-4 py-3 bg-beige text-brown rounded-md focus:outline-none focus:ring-2 focus:ring-orange";

interface iFormFieldProps {
    label: string
    name: string
    value: string
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void
    type?: FieldType
    required?: boolean
    error?: string
    rows?: number
    options?: string[]
}

export default function FormField({label, name, value, onChange, type = "text", required, error, rows = 6, options}: iFormFieldProps) {
    return (<div className="mt-3">
        <label htmlFor={name} className="block text-beige font-semibold mb-2">
            {label} {required && <span className="text-red">*</span>}
        </label>
        {type === "textarea" ? (
            <textarea id={name} name={name} value={value} onChange={onChange} required={required} rows={rows} className={fieldClass}/>
        ) : type === "select" ? (
            <select id={name} name={name} value={value} onChange={onChange} required={required} className={fieldClass + " font-semibold"}>
                <option value="" disabled>--- Sélectionner un choix ---</option>
                {options?.map((option) => (<option key={option} value={option}>{option}</option>))}
            </select>
        ) : (
            <input type={type} id={name} name={name} value={value} onChange={onChange} required={required} className={fieldClass}/>
        )}
        {error && <p className="text-red text-sm mt-2">{error}</p>}
    </div>);
}
