# Apna Himachal Landing Page - API Contracts

## Current Frontend Implementation
- **Status**: Frontend-only with mock data
- **Mock Data Location**: `/app/frontend/src/components/mockData.js`
- **Functionality**: Fully functional contact form with client-side validation and toast notifications

## Mocked Data Currently Used

### Contact Information (Static Data)
```javascript
contact: {
  phone: "+91-98765-43210",
  whatsapp: "+91-98765-43210", 
  email: "contact@apnahimachal.com",
  address: "Main Market, Shimla, Himachal Pradesh 171001"
}
```

### Hero Content (Static Data)
```javascript
hero: {
  title: "Find Trusted Local Taxi Drivers in Himachal",
  subtitle: "Connect with verified local drivers...",
  logoUrl: "https://customer-assets.emergentagent.com/..."
}
```

### About Content (Static Data)
```javascript
about: {
  title: "Your Gateway to Himachal's Local Transport",
  description: "Apna Himachal connects travelers...",
  features: ["Verified Local Drivers", "24/7 Service", "Competitive Pricing", "Mountain Route Specialists"]
}
```

## Backend Requirements (Optional)

### 1. Contact Form Submission API
**Endpoint**: `POST /api/contact`
**Purpose**: Handle contact form submissions from landing page

**Request Body**:
```javascript
{
  name: string,
  email: string, 
  phone: string,
  message: string
}
```

**Response**:
```javascript
{
  success: boolean,
  message: string,
  id?: string // submission ID for tracking
}
```

**Implementation Notes**:
- Store submissions in MongoDB `contact_inquiries` collection
- Add timestamp and basic validation
- Optional: Send email notifications to business owner
- Return success/error status for frontend toast display

### 2. Content Management (Future Enhancement)
**Endpoint**: `GET /api/content`
**Purpose**: Allow dynamic content updates instead of static mock data

## Frontend Integration Changes Required

### Remove Mock Data Import
```javascript
// Remove: import { mockData } from "./components/mockData";
// Replace with: API calls to backend
```

### Update Contact Form Handler
```javascript
// Current: Mock form submission with console.log
// Replace with: Actual API call to POST /api/contact
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post(`${API}/contact`, formData);
    toast({ title: "Message Sent!", description: response.data.message });
    setFormData({ name: '', email: '', phone: '', message: '' });
  } catch (error) {
    toast({ title: "Error", description: "Failed to send message. Please try again." });
  }
};
```

## Decision Point: Backend Implementation

**Question**: Do you want backend implementation for this static landing page?

**Option 1 - Keep Static (Recommended for landing page)**:
- Current implementation is perfect for a static business landing page
- Contact buttons (Call, WhatsApp, Email) work directly with device/browser
- Contact form can mailto: or remain as frontend-only demo
- No server costs, faster loading, easier maintenance

**Option 2 - Add Backend**:
- Implement contact form submission storage
- Enable inquiry management and email notifications
- Add content management capabilities
- Requires database and server maintenance

## Testing Protocol
- Frontend testing: Form validation, button interactions, responsive design
- Backend testing (if implemented): API endpoints, data validation, error handling
- Integration testing: Frontend-backend communication, error states