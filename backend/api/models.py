from django.db import models

# Create your models here.
class Candidate(models.Model):
	name = models.CharField(max_length=50)
	contact = models.CharField(max_length=12)
	experience = models.CharField(max_length=15)
	skills = models.CharField(max_length=80)
	APPLIED = 0
	ACCEPTED = 1
	REJECTED = 2
	STATUS_CHOICES = (
			(APPLIED, 'Applied'),
			(ACCEPTED, 'Accepted'),
			(REJECTED, 'REJECTED'),
	)
	status = models.IntegerField(default=0, choices=STATUS_CHOICES)
	resume = models.URLField(default="https://itscr1spy.github.io/React-Portfolio-Website/", max_length=100)

	def __str__(self):
			return self.name
	
