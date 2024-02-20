package com.example.demo.services;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import com.example.demo.entities.ApprovalStatus;
import com.example.demo.entities.Property;
import com.example.demo.repositories.ApprovalRepository;
import java.util.List;
import java.util.Optional;
import javax.persistence.EntityNotFoundException;
import javax.transaction.Transactional;
import org.springframework.stereotype.Service;

@Service
public class ApprovalService {

    @Autowired
    private ApprovalRepository apprepo;
    
    public ApprovalStatus addRequest(ApprovalStatus approve) {
        return apprepo.save(approve);
    }

    public ApprovalStatus confirmRequest(Long approvalId, ApprovalStatus appsts) {
        ApprovalStatus appStatus = apprepo.findById(approvalId).orElse(null);
        return apprepo.save(appsts);
    }
    
//    public Property updateProperty(Long propertyId, Property property) {
//        Property existingProperty = getPropertyById(propertyId);
//        // Update existingProperty with values from the incoming property
//        // Additional logic can be added if needed before saving to the repository
//        return propertyRepository.save(existingProperty);
//    }
}



