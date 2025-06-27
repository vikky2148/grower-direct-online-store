
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Star, Users } from 'lucide-react';

const featuredFarmers = [
  {
    id: '1',
    name: 'Sarah Johnson',
    farmName: 'Green Valley Organic',
    location: 'Vermont',
    specialties: ['Organic Vegetables', 'Herbs'],
    rating: 4.9,
    customers: 245,
    description: 'Certified organic farm specializing in heirloom vegetables and fresh herbs.',
  },
  {
    id: '2',
    name: 'Mike Rodriguez',
    farmName: 'Sunrise Orchards',
    location: 'Washington',
    specialties: ['Apples', 'Stone Fruits'],
    rating: 4.8,
    customers: 180,
    description: 'Family-owned orchard growing the finest apples and stone fruits for three generations.',
  },
  {
    id: '3',
    name: 'Emma Chen',
    farmName: 'Mountain View Dairy',
    location: 'Colorado',
    specialties: ['Artisan Cheese', 'Raw Milk'],
    rating: 5.0,
    customers: 120,
    description: 'Small-batch artisan cheese made from grass-fed cows in the Colorado mountains.',
  },
];

const FarmerSpotlight = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Farmers</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get to know the passionate farmers behind your favorite products
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredFarmers.map((farmer) => (
            <Card key={farmer.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl text-white font-bold">
                      {farmer.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="font-semibold text-lg text-gray-900">{farmer.name}</h3>
                  <p className="text-green-600 font-medium">{farmer.farmName}</p>
                </div>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-1" />
                    {farmer.location}
                  </div>
                  
                  <div className="flex items-center justify-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                    <span className="text-sm font-medium">{farmer.rating}</span>
                    <span className="text-gray-500 text-sm mx-2">•</span>
                    <Users className="h-4 w-4 text-gray-400 mr-1" />
                    <span className="text-sm text-gray-600">{farmer.customers} customers</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 justify-center">
                    {farmer.specialties.map((specialty) => (
                      <Badge key={specialty} variant="secondary" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <p className="text-sm text-gray-600 text-center mb-4">
                  {farmer.description}
                </p>
                
                <Button variant="outline" className="w-full">
                  View Products
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FarmerSpotlight;
