import pypdf

pdf_path = "RESUME_GAGANDEEP_DHALIWAL_081225[1].pdf"
output_path = "resume_text.txt"

try:
    reader = pypdf.PdfReader(pdf_path)
    text = ""
    for page in reader.pages:
        text += page.extract_text() + "\n"
    
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(text)
    print(f"Successfully extracted text to {output_path}")
except Exception as e:
    print(f"Error extracting text: {e}")
